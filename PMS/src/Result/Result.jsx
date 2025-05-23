import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactFlow, { Controls, MiniMap } from "react-flow-renderer";
import "./Result.css";

const Result = () => {
  const location = useLocation();
  const path = location.state?.path || [];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [path]);

  if (loading) {
    return <div className="loading-message">Loading path data...</div>;
  }

  if (!path || path.length === 0) {
    return <div className="error-message">No path data available. Please try again.</div>;
  }

  const colors = ["#FFD700", "#FF7F50", "#87CEEB", "#32CD32"];
  
  const nodeSpacing = 250; 
  const nodes = path.map((location, index) => ({
    id: `${index + 1}`,
    data: { label: location.name },
    position: { x: index * nodeSpacing, y: 100 }, 
    style: {
      background: colors[index % colors.length],
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
    animated: true,
    style: { stroke: "#888" },
  }));

  return (
    <div className="result-container">
      <video autoPlay loop muted className="background-video">
        <source src='./video/UI.mp4' type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="content">
        <div className="flow-container">
          <ReactFlow 
            nodes={nodes} 
            edges={edges} 
            fitView 
            zoomOnScroll={true} 
            panOnDrag={true} 
          >
            <MiniMap nodeColor={(node) => node.style.background} />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
};

export default Result;





// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import ReactFlow from "react-flow-renderer";
// import "./Result.css";

// const Result = () => {
//   const location = useLocation();
//   const path = location.state?.path || [];

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(false);
//   }, [path]);

//   if (loading) {
//     return <div className="loading-message">Loading path data...</div>;
//   }

//   if (!path || path.length === 0) {
//     return <div className="error-message">No path data available. Please try again.</div>;
//   }

//   const colors = ["#FFD700", "#FF7F50", "#87CEEB", "#32CD32"];
//   const nodes = path.map((location, index) => ({
//     id: `${index + 1}`,
//     data: { label: location.name },
//     position: { x: index * 200, y: 100 },
//     style: {
//       background: colors[index % colors.length],
//       color: "#fff",
//       border: "1px solid #333",
//       borderRadius: "10px",
//       padding: "10px",
//     },
//   }));

//   const edges = path.slice(1).map((_, index) => ({
//     id: `e${index + 1}-${index + 2}`,
//     source: `${index + 1}`,
//     target: `${index + 2}`,
//     label: `${index + 1}`,
//     animated: true,
//     style: { stroke: "#888" },
//     labelStyle: { fill: "#000", fontWeight: "bold" },
//   }));

//   return (
//     <div className="result-container">
//       <video autoPlay loop muted className="background-video">
//         <source src="./video/black-blue.mp4" type="video/mp4" />
//       </video>

//       <div className="overlay"></div>

//       <div className="content">
//         <div className="flow-container">
//           <ReactFlow nodes={nodes} edges={edges} fitView>
//           </ReactFlow>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Result;
