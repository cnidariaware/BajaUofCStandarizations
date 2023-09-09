const exampleFunct = ({event}) => {
    const subFunct0 = () => {
        /* 
    
        */
        const varExample0 = 0   //constant variable cannot change, not strongly typed  
        let varExample1 = 0     //local varialbe, not strongly typed can be any data type
        var varExample2 = 0     //global variable, not strongly typed can be any data type
        return 0;               //example function does nothing significant
    }
    return (
        /*
        Example of react html tags html is written in the return box rather than the App.js file
        App.js combines all the subcomponents and routes to the other "pages"
        */
        <header className = "header" id = "Header">
            <div className = "heading">
                <h1 className = "text">Example Header</h1>
            </div>
        </header>
    )
}

export default exampleFunct;