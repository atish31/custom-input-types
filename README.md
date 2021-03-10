# Type Customised

Type customised is a library that would help you get more control over the `input` types in your HTML or JSX files.

## Tech

Type Customised used vanilla JS to work and gets attached to the DOM efficiently.

And of course Tech Customised itself is open source with a public repository on GitHub.

## Custom Types
Type Customised provides a lot of custom `type` for all your `input` tags. 
All the types are categorised into their parent group from which they are derived.

### Text
Type Customised allows a precise control over all your text inputs. Explore the types below and implement it in your own awesome project!
- [upperCase](#upperCase)
- [lowerCase](#lowerCase)
- [pascalCase](#pascalCase)
- [camelCase](#camelCase)
- [snakeCase](#snakeCase)

#### upperCase
Converts the sentence to upper case.   
`<input type="upperCase">`   
**Example**
Input Text: Type Customised is the simplest way to handle input tags
Result: TYPE CUSTOMISED IS THE SIMPLEST WAY TO HANDLE INPUT TAGS
#### lowerCase
Converts sentence to lower case.   
`<input type="lowerCase">`  
**Example**  
Input Text: Type Customised is the simplest way to handle input tags  
Result: type customised is the simplest way to handle input tags
#### pascalCase
Converts all the words to pascal case (First letter in upper case of every word).   
`<input type="pascalCase">`  
**Example**  
Input Text: Type Customised is the simplest way to handle input tags  
Result: type customised is the simplest way to handle input tags

Alternatively, you can add `nospace` attribute to remove the spaces between word and make it a real `PascalCase` format.  
`<input type="lowerCase" nospace>`  
**Example**  
Input Text: Type Customised is the simplest way to handle input tags  
Result: type customised is the simplest way to handle input tags
#### camelCase
Converts all the words to camel case (First letter in lower case of first word and upper case of every other word).   
`<input type="camelCase">`  
**Example**  
Input Text: Type Customised is the simplest way to handle input tags  
Result: type customised is the simplest way to handle input tags

Alternatively, you can add `nospace` attribute to remove the spaces between word and make it a real `camelCase` format.  
`<input type="camelCase" nospace>`  
**Example**  
Input Text: Type Customised is the simplest way to handle input tags  
Result: type customised is the simplest way to handle input tags

#### snakeCase
Converts all the words to snake case (all words in lower case).   
`<input type="snakeCase">`  
**Example**  
Input Text: Type Customised is the simplest way to handle input tags  
Result: type customised is the simplest way to handle input tags

Alternatively, you can add `nospace` attribute to remove the spaces between word and make it a real `snake_case` format.  
`<input type="lowerCase" nospace>`  
**Example**  
Input Text: Type Customised is the simplest way to handle input tags  
Result: type customised is the simplest way to handle input tags