# Command Center Challenge
We're getting the green light! Voltus is building a command center dashboard for organizations with multiple facilities enrolled in our demand response partnership(s). Think HQ for a regional franchise, like a chain of coffee shops or a series of rock quarries. Using this dashboard we'd like to be able to get a list of facilities belonging to a given organization and plot them visually on a map.

# Run the Project
  1. Clone project
  2. Run `npm install` in your CLI
  3. Inside of `App.js @ line 14` set the parameter at the end of the URL to fetch spcific location's data
  4. On root file, run `npm run start` in your CLI
  5. App running on `http://localhost:8080`

# Added Libraries
  - [React-Google-Maps](https://www.npmjs.com/package/react-google-maps)
    - I left my API Key added directly into the URL on `SearchOrg @ line18` in order to have the map working for this presentation.

# Set of Tasks to Accomplish
- [x] Fetch data
- [x] Display facilities' locations on a map
- [x] Add a side panel to the left of the map. 
    - [x] 1. Insert `Facility, Reading, Last Update`
    The facility column should just contain the name of the facility. For now the reading column can just be defaulted to 0 or 0kW or random values. And the Last Updated can be defaulted to any value.
    - [x] 2. The top part should have inputs for the user to select a facility and input a kW value. This should update the values of `Reading` and `Last Update` in the table, as well as the total.
- [x] 4. The header should read the name of the organization


## Issues
- I did write `FacilityReader` to originally hold the top half of the `LeftPanel` component. After experiencing difficulties updating state, I had to lift the state up to `LeftPanel`. I did leave `FacilityReader` so you all can see my train of thought.

