# custom-input-types

## Download
custom-input-types is released under the [MIT license] & supports modern environments.


## Installation

In a browser:
```html
<script src="custom-input.min.js"></script>
```

or use CDN:

```html
<script src="https://unpkg.com/custom-input-types@1.0.10/custom-input.min.js"></script>
```

Using npm:
```shell
$ npm i -g npm
$ npm i custom-input-types
```

## Why custom-input-types?

Custom input types lets you use customised input types without writing any javascript for yourself,<br>
Available custom input types as of now

 * Only numbers:
      ```
     <input type="custom-number" />
     ```
 * Capitalized Text:
    ```
    <input id="capWords" type="custom-text" />
   ```
 * Camel Case Text with space:
      ```
    <input id="camelCase" type="camel-case" />
     ```

 * Camel Case Text with no space:
      ```
    <input id="noSpaceCamelCase" nospace type="camel-case" />
     ```
 * Pascal Case Text with space:
     ```
    <input id="pascalCase" type="pascal-case" />
    ```

 * Pascal Case Text with no space:
    ```
    <input id="noSpacePascalCase" nospace type="pascal-case" />
   ```
 * Snake Case:
      ```
    <input id="snakeCase" type="snake-case" />
     ```
 * All lower case:
      ```
    <input type="lowerCase" />
     ```
 * All Upper Case:
      ```
    <input type="upperCase" />
     ```
 * Phone:
      ```
     <input type="phone" />
     ```
 * Pincode(Default):
    ```
    <input type="pincode" />
    ```
 * Pincode(Alphanumeric attribute):
   ```
   <input id="pincode" type="pincode" alphanum />
   ```
 * Pincode(max-character):
    ```
   <input id="pincode" type="pincode" max=8 />
   ```
