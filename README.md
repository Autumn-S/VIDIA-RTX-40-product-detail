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
![Landingpage-screenshot](vite-project/public/images/Screenshot from 2023-08-02 08-04-20.png)

## Nav bars ##
The website features multiple responsive Nav bars.
## Header ##
 At the top, a header with the company logo and multiple links to other pages within the corporate website. The nav bar is hidden after scrolling past the landing page. Currently the links are dead, meaning they do not point to actual URLs. Additionally the login capability is still not implemented.
![Header1-screenshot](./vite-project/images/130795003/96718456-4aa9-40f8-ac1f-f8cc2a0627c6.png)
![Header2-screenshot](./images/130795003/0d950d99-ff16-465c-b7fb-dd52159d6991.png)

## Outer Nav Bar ##
Below the header, the outer nav bar features drop downs to navigate within the specific product category being advertised, in this instance the GPU product line and associated technology and information. This outer nav is shown at all times at the top of the page once the landing page is scrolled past.
![Outter-Screenshot](./images/130795003/897469e5-c828-429a-b289-6cdfcb26450f.png)

## Inner Nav Bar ##
The inner nav bar is directly below the landing page, and as the user scrolls down it attaches itself below the outer nav bar and remains visible for the rest of the page. It features clickable links to go to various sections within the page, as well as an animated line indicating which section is currently being viewed which is dynamic with user input.
![Inner-Screenshot](./images/130795003/aecebd26-b181-4714-a12b-001beeabf469.png)

## Accolades ##
The accolades section utilizes a fading carousel feature that shows sentence length accolades about the product. 
![Accolades-Screenshot](./images/130795003/93644dfc-ab7c-4d3f-8f71-9a292b7ba766.png)

## Architecture ##
This section utilizes an animated transform that is responsive to the user scrolling down the page. Upon reaching a breakpoint, the animation kicks off, moving the chip image to the right and then fading in to a set point on the section. In parallel the text changes to a grid of icons that feature the various benefits of the product's architecture. 
![Architecture-Screenshot](./images/130795003/4bd6b2c4-dc14-4584-95de-f04aaf6bbbd8.png)
![Architecture2-Screenshot](./images/130795003/865e1bda-acb9-4f58-9787-56a89ea8d93e.png)


## Performance ##
This section features charts that detail the performance capability of the product with various technology features enabled as well as comparison to other products the company offers.
![Performance-Screenshot](./images/130795003/4e2b297c-12e1-49a3-b9fc-dffa2fb7f5ee.png)

## Raytracing ##
The raytracing section features an image comparison tool, that allows the user to move a line element left and right that will show the difference between the product's ray tracing RTX feature on or off. 
![Raytracing-1-Screenshot](./images/130795003/18dca539-a3df-4b2b-b0af-82f3535d02aa.png)
![Raytracing-2-Screenshot](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/821e5276-aabb-484b-95c8-c879d9e329d2.png)
![Raytracing-3-Screenshot](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/32f7f2c8-852e-475d-87b5-4cb02cc1f4e2.png)

## DLSS 3 ##
A youtube video is embedded showcasing the DLSS (Deep Learning Super Sampling) technoloy.
![Dlss-Screenshot](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/41780747-fb94-400f-b71e-0ef542aad1d2.png)

## Reflex ##
Similar to DLSS section, a youtube video is embedded to show the features of the product.
![Reflex-Screenshot](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/7ac0fc63-53e8-4540-9d28-3ed4f285eaa8.png)

## Creative ##
The creative element is a dynamic feature that allows the user to choose what is visible below the navigator selectors. Similar to the inner nav bar at the top of the page, a green line indicates which section within the creative portion is currently in view. 
![Creative-1](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/e30d92d6-4024-4165-bd52-4d369b82254d.png)
![Creative-2](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/9815ac24-baa1-4b99-ae5b-0fefe05aad5e.png)
![Creative-3](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/fd18ea5c-2395-4dc1-b76c-cf43321062c3.png)
![Creative-4](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/fa06272e-dd93-478d-bc73-8d6df877ae97.png)
![Creative-5](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/f026183c-5d77-48a6-a49a-15af683af51b.png)

## Additional Features ##
Another section detailing the additional features and benefits of the product. 
![Add-Screenshot](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/e34fd2cd-cf52-4ff3-8eb3-44283a9c0852.png)

## Specs ##
![Spec1-Screenshot](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/45449b5e-105c-4b7e-837f-a0c35608c796.png)
![Spec2-Screenshot](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/0dad4696-ed3b-4b8b-81fe-1a85b570703d.png)
![Spec3-Screenshot](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/f3ce660f-6031-413e-bcfa-56c9fd0c1fa0.png)

## Gallery ##
![Gallery-Screenshot](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/a98a6cf3-e66f-4afc-a093-3aeaca52c18f.png)

## Shop ##
The section to put all of NVIDIA's partners.
![Shop-1](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/8ab4d1a9-25f3-4f9d-8129-b7cacd6abaff.png)
![Shop-2](https://github.com/Autumn-S/VIDIA-RTX-40-product-detail/images/130795003/c77a9bf2-b7b7-4a89-b35f-76f8e3bfbdf3.png)


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
