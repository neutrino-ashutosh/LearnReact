{/* 
    <div id='parent'>
     <div id='child1'>
        <h1> i'm h1 tag </h1>
        <h2> i'm h2 tag </h2>
     </div>
     <div id='child2'>
        <h1> i'm h1 tag </h1>
        <h2> i'm h2 tag </h2>   
     </div>
    </div>

    creating this using react.createElement !!
 */}


// const heading = React.createElement(
//     'h1',
//     { id:'heading' },
//       "!! hello world, using React CDNs !!"
//     );

const parent = React.createElement(
    'div',
    { id: "parent" },
    [
        React.createElement(
          'div',
          {id : "child1"},
          [
            React.createElement(
                'h1',
                {},
                "i'm h1 tag"
            ) ,
            React.createElement(
                'h2',
                {},
                "i'm h2 tag"
            )
          ]
        ),
        React.createElement(
            'div',
          {id : "child2"},
          [
            React.createElement(
                'h1',
                {},
                "i'm h1 tag"
            ) ,
            React.createElement(
                'h2',
                {},
                "i'm h2 tag"
            )
          ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);