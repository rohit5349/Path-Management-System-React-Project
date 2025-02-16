import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactFlow, { MiniMap, Controls } from "react-flow-renderer";
import "./Result.css";

const Result = () => {
  const location = useLocation();
  const path = location.state?.path || []; // Safely access state and provide a fallback

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [path]);

  if (loading) {
    return <div>Loading path data...</div>;
  }

  if (!path || path.length === 0) {
    return <div>No path data available. Please try again.</div>;
  }

  const colors = ["#FFD700", "#FF7F50", "#87CEEB", "#32CD32"]; // Custom colors for nodes
  const nodes = path.map((location, index) => ({
    id: `${index + 1}`,
    data: { label: location.name },
    position: { x: index * 200, y: 100 }, // Spread nodes
    style: {
      background: colors[index % colors.length], // Cycle through colors
      color: "#fff",
      border: "1px solid #333",
      borderRadius: "10px",
      padding: "10px",
    },
  }));

  const edges = path.slice(1).map((_, index) => ({
    id: `e${index + 1}-${index + 2}`,
    source: `${index + 1}`,
    target: `${index + 2}`,
    label: `${index + 1}`,
    animated: true, // Add animation to edges
    style: { stroke: "#888" },
    labelStyle: { fill: "#000", fontWeight: "bold" },
  }));

  return (
    <div className>
      <h1>Shortest Path Visualization</h1>
      <div style={{ height: "500px", width: "100%" }}>
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <MiniMap nodeColor={(node) => node.style.background} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Result;
