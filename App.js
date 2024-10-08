const heading = React.createElement("div", {id:"div1"}, React.createElement("div", {id:"div2"},
    [React.createElement("h1", {id:"heading"},"I am Asish Kumar Dash" ),React.createElement("h1", {id:"heading"},"I am Asish Kumar Dash" )]));
      const root = ReactDOM.createRoot(document.getElementById("root"));
      //console.log(heading)//Return Object Which is ReactElement 
      root.render(heading);