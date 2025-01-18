use std::collections::HashMap;

use torin::prelude::*;

fn main() {
    demo().unwrap();
}

fn demo() -> Option<()> {
    // --- Initial measurement ---

    let mut demo_dom = DemoDOM::default();

    // Node ID 0 (Root)
    demo_dom.add(
        0,          // ID
        None,       // Parent ID, because it is the root, it doesn't have any
        vec![1, 2], // Children IDs of the Nodes below
        Node::from_size_and_direction(
            Size::Pixels(Length::new(300.0)),
            Size::Inner,
            DirectionMode::Vertical,
        ),
    );

    // Node ID 1
    demo_dom.add(
        1,       // ID
        Some(0), // Parent ID (root)
        vec![],  // No children
        Node::from_size_and_direction(
            Size::Pixels(Length::new(100.0)),
            Size::Pixels(Length::new(150.0)),
            DirectionMode::Vertical,
        ),
    );

    // Node ID 2
    demo_dom.add(
        2,       // ID
        Some(0), // Parent ID (root)
        vec![],  // No children
        Node::from_size_and_direction(
            Size::Pixels(Length::new(100.0)),
            Size::Pixels(Length::new(150.0)),
            DirectionMode::Vertical,
        ),
    );

    // `usize` is our Node ID type
    let mut torin = Torin::<usize>::new();

    // Run the measurement
    torin.measure(
        0, // Suggested Root ID
        Rect::new(
            // Suggested Root area
            Point2D::new(0.0, 0.0),
            Size2D::new(1000.0, 1000.0),
        ),
        &mut None::<NoopMeasurer>, // Custom measurer is optional
        &mut demo_dom,             // Our DOM!
    );

    let root_node = torin.get(0)?; // 300px x 300px
    let first_node = torin.get(1)?; // 100px x 150px
    let second_node = torin.get(2)?; // 100px x 150px

    assert_eq!(root_node.area.size, Size2D::new(300., 300.));
    assert_eq!(first_node.area.size, Size2D::new(100., 150.));
    assert_eq!(second_node.area.size, Size2D::new(100., 150.));

    // --- Incremental measurement  ---

    // Update the node in the DOM with the new layout config
    demo_dom.set_node(
        2,
        Node::from_size_and_direction(
            Size::Pixels(Length::new(100.0)),
            Size::Pixels(Length::new(400.0)), // Changed from 150px to 400px
            DirectionMode::Vertical,
        ),
    );

    // Here we mark the node as dirty so that Torin knows it was changed
    torin.invalidate(2);

    torin.find_best_root(&mut demo_dom);

    torin.measure(
        0,
        Rect::new(Point2D::new(0.0, 0.0), Size2D::new(1000.0, 1000.0)),
        &mut None::<NoopMeasurer>,
        &mut demo_dom,
    );

    let root_node = torin.get(0)?; // 300px x 550px - Changed! (was 300px x 300px before)
    let first_node = torin.get(1)?; // 100px x 150px
    let second_node = torin.get(2)?; // 100px x 400px - Changed! (was 100px x 150px before)

    assert_eq!(root_node.area.size, Size2D::new(300., 550.));
    assert_eq!(first_node.area.size, Size2D::new(100., 150.));
    assert_eq!(second_node.area.size, Size2D::new(100., 400.));

    // --- Actual incremental measurement  ---
    let mut torin = Torin::<usize>::new();

    let mut demo_dom = DemoDOM::default();

    demo_dom.add(
        0,       // ID
        None,    // Parent ID, because it is the root, it doesn't have any
        vec![1], // Children IDs
        Node::from_size_and_direction(
            Size::Pixels(Length::new(300.0)),
            Size::Pixels(Length::new(300.0)),
            DirectionMode::Vertical,
        ),
    );

    demo_dom.add(
        1,       // ID
        Some(0), // Parent ID (root)
        vec![2], // Children IDs
        Node::from_size_and_direction(
            Size::Pixels(Length::new(100.0)),
            Size::Inner,
            DirectionMode::Vertical,
        ),
    );

    demo_dom.add(
        2,       // ID
        Some(1), // Parent ID (1)
        vec![],  // Children IDs
        Node::from_size_and_direction(
            Size::Pixels(Length::new(50.0)),
            Size::Pixels(Length::new(200.0)),
            DirectionMode::Vertical,
        ),
    );

    // Initial measurement
    torin.find_best_root(&mut demo_dom);
    torin.measure(
        0,
        Rect::new(Point2D::new(0.0, 0.0), Size2D::new(1000.0, 1000.0)),
        &mut None::<NoopMeasurer>,
        &mut demo_dom,
    );

    let root_node = torin.get(0)?; // 300px x 300px
    let first_node = torin.get(1)?; // 100px x 200px
    let second_node = torin.get(2)?; // 50px x 200px

    assert_eq!(root_node.area.size, Size2D::new(300., 300.));
    assert_eq!(first_node.area.size, Size2D::new(100., 200.));
    assert_eq!(second_node.area.size, Size2D::new(50., 200.));

    // Mutate the Node 2
    demo_dom.set_node(
        2,
        Node::from_size_and_direction(
            Size::Pixels(Length::new(50.0)),
            // Changed from 200px to 500px
            Size::Pixels(Length::new(500.0)),
            DirectionMode::Vertical,
        ),
    );
    torin.invalidate(2);

    // Incremental measurement
    torin.find_best_root(&mut demo_dom);
    torin.measure(
        0,
        Rect::new(Point2D::new(0.0, 0.0), Size2D::new(1000.0, 1000.0)),
        &mut None::<NoopMeasurer>,
        &mut demo_dom,
    );

    let root_node = torin.get(0)?; // 300px x 300px
    let first_node = torin.get(1)?; // 100px x 500px - Changed! (was 100px x 200px before)
    let second_node = torin.get(2)?; // 50 x 500px    - Changed! (was 50 x 200px before)

    assert_eq!(root_node.area.size, Size2D::new(300., 300.));
    assert_eq!(first_node.area.size, Size2D::new(100., 500.));
    assert_eq!(second_node.area.size, Size2D::new(50., 500.));

    Some(())
}

#[derive(Clone)]
struct DOMNode {
    parent: Option<usize>, // Parent ID (Root can't have an ID)
    children: Vec<usize>,  // IDs of children
    height: u16,           // Height in the DOM (amount of ancestors between this node and the Root)
    node: Node,            // Layout node configuration
}

#[derive(Default)]
pub struct DemoDOM {
    nodes: HashMap<usize, DOMNode>,
}

impl DemoDOM {
    /// Add a Node
    pub fn add(&mut self, node_id: usize, parent: Option<usize>, children: Vec<usize>, node: Node) {
        // Get the parent's height in the DOM, default to 0 (Root) if missing
        let parent_height = parent
            .map(|p| self.nodes.get(&p).unwrap().height)
            .unwrap_or(0);

        // Assign the node a height just below its parent
        let height = parent_height + 1;

        self.nodes.insert(
            node_id,
            DOMNode {
                parent,
                children,
                height,
                node,
            },
        );
    }

    /// Update a Node
    pub fn set_node(&mut self, node_id: usize, node: Node) {
        self.nodes.get_mut(&node_id).unwrap().node = node;
    }

    // Remove a Node
    pub fn remove(&mut self, node_id: usize) {
        // Remove this Node
        let node = self.nodes.remove(&node_id).unwrap();

        // Remove this Node from the parent
        if let Some(DOMNode { children, .. }) = node.parent.and_then(|p| self.nodes.get_mut(&p)) {
            children.retain(|c| *c != node_id);
        }

        // Remove children recursively
        for child in node.children {
            self.remove(child);
        }
    }
}

impl DOMAdapter<usize> for DemoDOM {
    // Get the children Nodes of the given Node
    fn children_of(&mut self, node_id: &usize) -> Vec<usize> {
        self.nodes
            .get(node_id)
            .map(|c| c.children.clone())
            .unwrap_or_default()
    }

    // Get the parent Node of the given Node
    fn parent_of(&self, node_id: &usize) -> Option<usize> {
        self.nodes.get(node_id).and_then(|c| c.parent)
    }

    // Get height in the DOM of the given Node
    fn height(&self, node_id: &usize) -> Option<u16> {
        self.nodes.get(node_id).map(|c| c.height)
    }

    // Get the Layout configuration of the given Node
    fn get_node(&self, node_id: &usize) -> Option<Node> {
        self.nodes.get(node_id).map(|c| c.node.clone())
    }

    fn is_node_valid(&mut self, _node_id: &usize) -> bool {
        // We assume all the nodes in this DOM are actually available for measurement
        // This could not be the case in certain implementations of DOMs, like in Freya
        // where Placeholders elements not to be measured
        true
    }

    fn root_id(&self) -> usize {
        // We assume 0 is the root ID of the DOM
        0
    }
}
