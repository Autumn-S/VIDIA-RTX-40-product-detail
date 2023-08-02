# VIDIA-RTX-40-product-detail #
# Table of Contents #
-[Header](#header)<br/>
-[OuterNavBar](#outer-nav-bar)<br/>
-[InnerNavbar](#inner-nav-bar)<br/>
-[Accolades](#accolades)<br/>
-[Architecture](#architecture)<br/>
-[Performance](#performance)<br/>
-[Raytracing](#raytracing)<br/>
-[DLSS 3](#dlss-3)<br/>
-[Reflex](#reflex)<br/>
-[Creative](#creative)<br/>
-[Additional Features](#additional-features)<br/>
-[Specs](#specs)<br/>
-[Gallery](#gallery)<br/>
-[Shop](#shop)<br/>
-[Development Setup](#development-setup)<br/>
-[Tech Stack](#tech-stack)<br/>
-[Why use Tailwind CSS?](#why-use-tailwind-css?)<br/>
-[Contributors](#contributors)<br/>

## Description ##

A full stack application including database, API server and website detailing a video card product similar to NVIDIA's RTX-40 series.<br/>
See https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/<br/>

The motivation for this project stems from our teams interest into the tech world. The NVIDIA website has a high level of interactivity, featuring numerous animations and presenting a challenging environment for web development. By replicating this website, we open ourselves up to a learning opportunity that surpasses what we would gain from working on a less complex site.

# Website features #

## Landing Page ##
While simple in appearance, the landing page also serves as the React context used for the API queries to gather data required for the rest of the page. 
![Landingpage-screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-04-20.png)

## Nav bars ##
The website features multiple responsive Nav bars.
## Header ##
 At the top, a header with the company logo and multiple links to other pages within the corporate website. The nav bar is hidden after scrolling past the landing page. Currently the links are dead, meaning they do not point to actual URLs. Additionally the login capability is still not implemented.
![Header1-screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-04-38.png)
![Header2-screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-06-09.png)

## Outer Nav Bar ##
Below the header, the outer nav bar features drop downs to navigate within the specific product category being advertised, in this instance the GPU product line and associated technology and information. This outer nav is shown at all times at the top of the page once the landing page is scrolled past.
![Outter-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-33-21.png)

## Inner Nav Bar ##
The inner nav bar is directly below the landing page, and as the user scrolls down it attaches itself below the outer nav bar and remains visible for the rest of the page. It features clickable links to go to various sections within the page, as well as an animated line indicating which section is currently being viewed which is dynamic with user input.
![Inner-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-33-33.png)

## Accolades ##
The accolades section utilizes a fading carousel feature that shows sentence length accolades about the product. 
![Accolades-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-33-43.png)

## Architecture ##
This section utilizes an animated transform that is responsive to the user scrolling down the page. Upon reaching a breakpoint, the animation kicks off, moving the chip image to the right and then fading in to a set point on the section. In parallel the text changes to a grid of icons that feature the various benefits of the product's architecture. 
![Architecture-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-33-58.png)
![Architecture2-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-34-23.png)


## Performance ##
This section features charts that detail the performance capability of the product with various technology features enabled as well as comparison to other products the company offers.
![Performance-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-34-32.png)

## Raytracing ##
The raytracing section features an image comparison tool, that allows the user to move a line element left and right that will show the difference between the product's ray tracing RTX feature on or off. 
![Raytracing-1-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-06-32.png)
![Raytracing-2-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-06-46.png)
![Raytracing-3-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-06-57.png)

## DLSS 3 ##
A youtube video is embedded showcasing the DLSS (Deep Learning Super Sampling) technoloy.
![Dlss-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-34-45.png)

## Reflex ##
Similar to DLSS section, a youtube video is embedded to show the features of the product.
![Reflex-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-07-12.png)

## Creative ##
The creative element is a dynamic feature that allows the user to choose what is visible below the navigator selectors. Similar to the inner nav bar at the top of the page, a green line indicates which section within the creative portion is currently in view. 
![Creative-1](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-07-22.png)
![Creative-2](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-07-25.png)
![Creative-3](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-07-27.png)
![Creative-4](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-07-30.png)
![Creative-5](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-07-33.png)

## Additional Features ##
Another section detailing the additional features and benefits of the product. 
![Add-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-35-04.png)

## Specs ##
![Spec1-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-35-16.png)
![Spec2-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-35-28.png)
![Spec3-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-35-40.png)

## Gallery ##
![Gallery-Screenshot](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-35-59.png)

## Shop ##
The section to put all of NVIDIA's partners.
![Shop-1](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-07-59.png)
![Shop-2](./vite-project/public/images/Screenshot%20from%202023-08-02%2008-08-20.png)


# Development Setup #

1. Install dependencies: `npm install`
2. Create your `.env` file: `touch .env`
3. Add your info in `.env`
4. Open Up Your Dev Environment `npm run dev`

# Tech Stack #
* [NodeJS](https://nodejs.org/en "Node")
* [React](https://react.dev/ "React")
* [Tailwind CSS](https://tailwindcss.com/)
    * [Tailwind Vite Install Guide](https://tailwindcss.com/docs/guides/vite)
    * [Tailwind Cheatsheet](https://tailwindcomponents.com/cheatsheet/)
* [Express]<http://expressjs.com/>
* [PostgreSQL]<https://www.postgresql.org/>

## Why use Tailwind CSS? ##
There are many benefits of using a CSS framework like Tailwind. Below are the major ones.
* _You write less custom CSS_. With Tailwind, you style elements by applying pre-existing classes directly in your HTML. By using utility classes in this way, you can build custom designs without writing CSS.
* _You keep CSS files small_. Without a framework like Tailwind, you have to keep writing CSS as you add new features and components. As a result, your CSS files continue to grow and get heavier. By using utilities like Tailwind’s flexbox and padding utilities, most styles are reusable so you rarely need to write new CSS.
* _You don’t have to invent class names_. When Tailwind, you’re choosing classes from a pre-defined design system. That means you don’t need to agonize over picking the “perfect” class names for certain styles and components, or remember complicated ones like sidebar-inner-wrapper.
* _You can make safer changes_. With the traditional approach, if you make changes to CSS, you may break something across your site. Unlike CSS, utility classes in your HTML are local. That means you can change them without worrying about breaking something else on your site.

## Contributors ##

[Bao Tran](https://www.linkedin.com/in/baottran21/):space_invader:<br/>
[Nathan Vititoe](https://www.linkedin.com/in/nathanvititoe/)<br/>
[Autumn Sheridan](https://www.linkedin.com/in/autumn-r-sheridan/)<br/>
[Joey Laspe](https://www.linkedin.com/in/joe-laspe/)<br/>
[Benjamin Schenk](https://www.linkedin.com/in/benjamin-k-schenk/)
