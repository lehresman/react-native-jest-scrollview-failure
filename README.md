## What is this?

This is an example project to demonstrate how Jest + Enzyme with React Native is 
behaving strange with ScrollView components.

To test:

    yarn install
    npx jest

## What to look for?

Look at `example.test.js`.  There are two nearly identical tests.  One wraps
a text block in a `<View>` and the other in a `<ScrollView>`.  Why can enzyme
not see what is rendered below the ScrollView?
