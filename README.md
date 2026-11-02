# IT313 Laboratory 6: React Native Core Components in Action - Student Directory Viewer

## 1. Problem

The registrar required an academic advising directory screen enabling advisers to browse enrolled students, toggle advising flags interactively, and quickly search across student records.

## 2. Component Structure

- **`StudentDirectory(Parent)`**:
- Stores the student list and search text.
- Filters student in real time as you type in search bar.
- Renderes cards inside a `ScrollView` using `.map()` with unique `key={student.id}`
- Updates the flagged status of a student when clicked.

- **`StudentCard.js (Child)`**:
- Takes student data (`id`, `name`, `photoUrl`, `flagged`) and the toggle as props.
- Lays out the photo, name, and year side by side using `View`, `Image`, and `Text`.
- Uses `Pressable`  for the flag button so it changes color and text when pressed or flagged.

## Core Components Applied

- **`View`**: Organizes the layout and groups items.
- **`Text`**: Displays the student name, year, and titles.
- **`Image`**: Shows the student profile picture with a fixed size and rounded edges.
- **`TextInput`**: The search box that filters the directory list as you type.
- **`ScrollView`**: Lets you scroll smoothly through all the student cards.
- **`Pressable`**: Handles tapping on the flag button with press feedback.

## 3. How to Run the App

1. Install dependencies:
    npm install
2. Start the development server using Expo:
    npx expo start
3. Run the application:
   Scan the terminal QR code using Expo Go on Android or iOS device.
