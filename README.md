# Lets-Get-Fed

Trent Global Interactive Map Project 01.

The creation of project is based on the five planes of UI/UX

- Strategy
- Scope
- Structure
- Skeleton
- Surface

# Live URL

The project is deployed by Netify and can be accessed via this link -https://optimistic-pasteur-afaba3.netlify.app/

# Strategy

"Lets Get Fed" is a web app centred on providing users an interactive map developed with datasets to enable users to view, navigate to, and locate different hawker centres in Singapore. The app is designed for locals and tourists alike, empowering users to find save time and effort by providing a 'one-stop-shop' experience when locating hawker centres - Even the lesser known ones

## Site Owner Goals

68% of the 19.2 million international travellers in Singapore are here for the food. Hawker Centres are epochal to our culinary scene. As a foodie that goes for frequent 'food hunts', I understand the frustration of the distinct lack of unbiased resource that provides food hunters the locations and existence of hawker centres in Singapore. This app will attemp to expose lesser-known hawkers centres to users and hopefully drive traffic to these hawker centres by providing relevant information to users.

- Minimal learning curve to using the web app with simple UI
- View all available hawker centres and their respective locations and pictures
- Easily acquire accurate address and postal code of hawker centres
- Search, locate, and route to specific hawker centres that they might have already heard of
- Locate their current position

## User Stories

- As a user, I want to peer through the commercial veil and see all the hawker centres in Singapore so I can discover hidden gems that are beyond the usual tourist-y spots.
- As a user, it will be great if I can quickly get hold of all vital information on hawker centres to allow for easy navigation.
- As a user, I want the know my current location relative to the hawkers, and have an alternative pertaining to routing options outside of the usual tools like Google Map.
- I want to be able to design and alter my route so that I can plan an itinerary that fits my intention and gourmet expedition.

# Scope

## Functional

- User has a birdeye's view on ALL hawker centre locations in Singapore
- User will always get a real-time marker of their current location
- For users unfamiliar with estate names in Singapore, they can filter through hawker centres based on regions. (North, South, East, West, and Central)
- Users can utilise the search bar to search for specific location keywords and select matching results that will initiate routing from their current position to their selection

## Content

- Real-time update on user location.
- Name, address, and picture of hawker centres.
- Region filters
  -Search bar for routing

## Non-functional requirements

- Mobile responsiveness
- Performance.

# Structure

This is a single page website that is split into different sections.

- Landing page carousel
- Map
- Region filter
- Search Bar
- Contact form

[![flowchart.jpg](https://i.postimg.cc/qqDQM3hC/Flowchart.jpg)](https://postimg.cc/Fkc0T1x9)

## Navigation design

Landing Page Carousel with Nav buttons

- To achieve the idea of minimal learning curve when using the app, the site has adopted a downward scrolling form for user to access the main functionalities.

- The carousel is mobile responsive and reacts accordingly to different screen sizes

- Buttons on carousl are functional and allow users to navigate to the next or previous image, or pick between 1 of 3 to view

- The simple Navbar in the form of clickable texts allow user to navigate to the 'map' or 'contact us' section with ease.
- The Navbar is layered atop the carousel is visible and working regardless of device size.

## Map

- Contains the icons of all the hawker centres in Singapore anchored by their positions.

- A separate icon is also utilised to indicate the location of the user, which changes as they move around the island for easy reference bearing finding.

- The top right corner resides the layer control widget, which allow users to toggle on and off the hawker centres in Singapore based on their region.

- When initialized, the routing directions will appear on the right side of the map with alternate routing as a separate, collpased card.

- For mobile responsiveness and enhanced UX, a collapsed button is built into the routing card. Click on the 'x' on the route car will collapse it.

- Even when the routing card is collapsed, the route remains visible on the map highlighted in red.

- Users can manipulate the highlighted route to alter route based on their used case.

- Routing card will refresh and change accordingly.

## Search Bar

- User is able search for keywords pertaining to the location or name of the hawker centre (eg 'Alexandra Food Village') and click on the one they are looking for to initialize routing.
- Even with incomplete search, the web app will suggest all relevant places and user can select from the dropdown list. (eg 'Bukit' will return all results containing the word like 'Bukit Merah'/'Bukit Timah' etc)

## Contact Form

- User can fill out a form at the very end for owner to contact user by their preferred method to hear their comments.

- User has to fill in valid Name, email, phone number, and select one of two methods in which they are comfortable to be contacted through.

- Appropriate form controls/validation are implemented so all erroneous or invalid forms will return an alertbox with specific requirements of each category indicated.

- If submitted properly, users will be notified through an alertbox

# Skeleton

[![wireframe.jpg](https://i.postimg.cc/HxxyWPQB/Wireframe.jpg)](https://postimg.cc/5Hh0ngKC)

# Surface

## Color

Colour choice are vibrant and commonly known to invoke feelings of hunger and desire.

- Chinese red (Maroon)
- Gold

## Fonts

Font for the website is default in HTML5

- Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif

# Testing

1. Test for working links for 'Maps' and 'Contact Us'
   - User should be able to automatically be directed to respective locations of the web upon click
2. Test for accuracy of user location
   - User should see 'user icon' by default on their current location.
   - Using browser, set 'location service' to be required at the initial load of the page.
   - Turn off location settings and icon should disappear
   - Tested location in school, at home, Changi Jewel, and Bukit Timah to cover general regions of "Nort", "South", "East", "West", and "Central"
3. Test the routing accuracy of routing machine.
   - Ensure correct user location as start by enabling location services
   - Selected different hawker centres in different regiond
   - compared web's routing to Google Map's routing
   - Dragged the route to create customised path, checked against Google Map again
4. Test the icon pop-up reaction
   - Click on any hawker icons to reveal picture, name, and address of hawker centre
   -
5. Test the region control layer
   - User should be able to hide or reveal different hawker centres and clusters based on region
   - Double check accuracy with Google search results

# Technologies, Languages, Plugins and Libraries

- HTML 5
- CSS 3
- Javascript
- Bootstrap 5.1.3
- Axios
- Leaflet 1.7.1
- Leaflet Marker Cluster https://github.com/Leaflet/Leaflet.markercluster
- http://proj4js.org/
  -Liedman Leaflet Routing Machine https://github.com/perliedman/leaflet-routing-machine

## API

- data.gov.sg

## Design & Fonts

- https://www.flaticon.com/authors/freepik
