## Tip Tuesday

#### Destructuring Props in React

- Destructuring was introduced in ES6
- It allows us to extract multiple pieces of data from an array or object and assign them to their own variables.
- Destructuring really shines in React apps, where it can greatly simplify how you write props.

#### Let’s take a code example where we’re passing in a name and an emoji to a component that will display it-
![image](https://user-images.githubusercontent.com/81974869/135746309-0f4d75a4-b1e3-496a-b488-a7ad3f78535b.png)

### Here’s the same exact React function component without destructuring:
![image](https://user-images.githubusercontent.com/81974869/135746341-d14815a1-04a6-4195-9250-b3e8196a5dee.png)

- Particularly when you’re using a prop repeatedly, you start to save a lot of typing when you can refer to {emoji} instead of {props.emoji}.
```
```
- It’s not a big difference in such a small component, but in a React component with dozens of props, destructuring can be a big deal for readability.

##### There's one more way of destructuring where we don't have to use the word props at all. The code for the same can be found in the index.js file.

#### Property
- Props Destructuring

#### Resources( To Learn More about Props and Destructuring)
- https://reactnative.dev/docs/props
- https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0
