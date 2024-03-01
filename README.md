# BajaUofCStandarizations

This is a document outlining how programming and coding in all languages should generally follow.

1. Readible code is valued above all else ie. Variable names that make sense, function names that are clear
2. Comment code even if it is abnocious make it so that you or anyone besides yourself in 10 years can red what is going on. Programs are allowed to comment code automatically just as long as they make sense to you six months down the road
3. Code is standarize to common industry practices, to enfore this we will use pylint and eslint to automatically make sure that naming covensions are enforced
4. Use pull requests to dev branch to merge code 

DO NOT MERGE TO THE PRODUCTION BRANCH (Main for now)

5. Examples of base templates in most common languages will be available in each folder
6. Try to make code as modular and reusable as possibe
7. Use chatgpt but we warned you will spend more time on debugging than coding, USE IT FOR REGEX
8. Include a perment email and name if you write any code, this is just for questions on what x does 

    DO NOT USE THIS TO GET ALUMNI TO DO YOUR WORK

9.

# JavaScript
Now using JSDoc
```js

//More prefered arrow function just need to call function and does function immediately
  /**
 * @param {Object} inputVar - one argument into the function should be its name
 * @param {number} b - one argument into the function should be its name
 * @returns {Promise<number>} c - what the program returns with type
 * @description A brief description of what the function does
 * @author Name <semiperminant@exmaplemail.com>
//semi-perminant email, do not need to respond but try to be a good alumni
 */
const exampleFunct = (inputVar) => {
    const varExample0 = 0   //constant variable cannot change, not strongly typed  
    let varExample1 = 0     //local varialbe, not strongly typed can be any data type
    var varExample2 = 0     //global variable, not strongly typed can be any data type
    return 0;               //example function does nothing significant
}

/**
 * @param {Object} inputVar - one argument into the function should be its name
 * @param {number} b - one argument into the function should be its name
 * @returns {Promise<number>} c - what the program returns with type
 * @description A brief description of what the function does
 * @author Name <semiperminant@exmaplemail.com>
//semi-perminant email, do not need to respond but try to be a good alumni
 */
function exampleFunct2 (inputVar) {
    const varExample0 = 0   //constant variable cannot change, not strongly typed  
    let varExample1 = 0     //local varialbe, not strongly typed can be any data type
    var varExample2 = 0     //global variable, not strongly typed can be any data type
    return 0;               //example function does nothing significant
}
```

# Python

```python
const exampleFunct = ({event}) => {
    /* 
    What function does
    REQUIRES:
        input var type
    PROMISES:
        What function returns if applicable
    Develop in part by: Your Name
    Contact: semi-perminant email, do not need to respond but try to be a good alumni
    */
   
    const subFunct0 = () => {
        /* 
        What function does
        REQUIRES:
            input var type
        PROMISES:
            What function returns if applicable
        Develop in part by: Your Name
        Contact: semi-perminant email, do not need to respond but try to be a good alumni
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
```

# C++

```cpp
int exampleFunct (int inputVar) {
    /* 
    What function/class does
    REQUIRES:
        input var type
    PROMISES:
        What function returns if applicable
    Develop in part by: Your Name
    Contact: semi-perminant email, do not need to respond but try to be a good alumni
    */
   
    int varExamlpe;
    int varExample1 = 0;    //example variable, is strongly typed. Can only be an integer
    return 0;               //example function does nothing significant
};
```

# C

```c
int exampleFunct (int inputVar) {
    /* 
    What function does
    REQUIRES:
        input var type
    PROMISES:
        What function returns if applicable
    Develop in part by: Your Name
    Contact: semi-perminant email, do not need to respond but try to be a good alumni
    */
   
    int varExample0;
    int varExample1 = 0;    //exampe variable is strongly typed. In this case can only be an integer
    return 0;               //example function does nothing significant
};
```
