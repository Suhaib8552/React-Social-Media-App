# React-Social-Media-App
#### This project is a Social Media Dashboard built using React, focusing on component-based architecture, useState Hook, and props for efficient state management and communication between components.

### The dashboard consists of four main sections:

### Sections:
### 1. Topbar
#### - Contains the application logo and a search bar.

#### - Search Functionality:

##### --> Users can search posts by username or caption.

##### --> The useState Hook is used to manage the search input state.

##### --> Posts are dynamically filtered in the Feed based on the search query.

### 2. Leftbar
#### - Displays static navigation options like: Feed, Groups etc.

#### - Also includes a Friend List section:

##### --> Users can show/hide the friend list using a toggle button.

##### --> The visibility is controlled using the useState Hook.

### 3. Feed Section
#### - Displays a list of posts.

#### - Each Post is a separate component that receives data through props like:

##### --> Username, Caption(optional), Post image, Number of likes

##### --> The Feed dynamically updates based on the search input from the Topbar.

### 4. Rightbar
#### - Shows Birthday Notifications.

#### - Displays a list of Online Friends

