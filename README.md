<div align="center">
<h1>MathOnWeb</h1>
<hr>
<strong>A simple webapp built to make math homework easier</strong><br><br>

<img src="https://img.shields.io/github/workflow/status/mathisburger/MathOnWeb/publish?style=for-the-badge">
<img src="https://img.shields.io/github/license/mathisburger/MathOnWeb?style=for-the-badge"> 
<img src="https://img.shields.io/github/v/release/mathisburger/MathOnWeb?style=for-the-badge">
</div>
<hr>
<div align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" width="100" />
</div>

# Project information

I started this project with the idea to automate my math homework. At the same time I heared about this new web framework everybody is talking about named svelte. It has the advantage of being very fast, because it depends on the native DOM of the browser and has no virtual one. Therefore, it is perfect for complex math operations, which let me come to the conclusion that svelte would be a nice option for this project. I have choosen `svelte-kit`, because it automatically implements routing in the web. This made it very easy for me to add new routes by just adding a new file into the routes directory.

# Updates

This project is a personal purpose project. That means it will only be updated for my personal purposes. But there is a chance that I will implement features that were requested by the community. But the main focus relies on my personal advantage from this project, because it was built to help me solving my math homework more easily than by using the calculator for certain tasks.

# Contribute

Everyone who wants to contribute to this project is allowed to do so. Just fork the project and implement the features on your own. There is no real guideline for the series of implementing the calculation features. Feel also free to implement features from issues directly into you fork and create pull_requests to this repository. But there are code quality guidelines. First of all, the code has to function properly and should be performant on also low spec systems. TIPP: You can throttle the performance of your browser to test the performance on low spec systems. Furthermore, your code should not contain any duplicates. Try to reuse given lib functions and classes in your local svelte component. At last, your code should be documented and should pass the `lint` workflow. To test the workflow locally, just enter `npm run lint` into your command line.

# Setup

The master branch is hosted as github-pages webpage. This requires some extra configuration and parsing. That happens in the `fix-typos.js`. This file makes the svelte kit build output compatible with github pages. If you want to host your app on github-pages you have to copy this
configurations and scripts to make the application function properly. The extra configuration is not required, if you want to host your application on an external webserver. You just need to copy the build output into the documentroot of your webserver.

# Techstack

The techstack of MathOnWeb is not very large, because it is only an webapp without any server or other things.
svelte => 3.44.0
svelte/kit => 1.0.0-next.195
prettier => 2.2.1
typescript => 4.0.0
