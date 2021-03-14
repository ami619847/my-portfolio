import React from 'react';
import Project from "./Project"; 
import { data } from "../files/portfolio_data";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {data.map((project) => (
          <Grid item key={project.title} xs={12} sm={6} md={4}>
            <Project project={project}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
};

// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import GridList from "@material-ui/core/GridList";
// import Box from '@material-ui/core/Box';
// import { data } from "../files/portfolio_data";
// import Project from "./Project"; 

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
//   root2: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//   },
//   gridList: {
//     height: 400,
//     width: 900,
//     transform: "translateZ(0)",
//   },
// }));

// export default function SimpleTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>
//         Portfolio
//       </Typography>
      
//       <div className={classes.root}>
//         <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" >
//           <Tab label="All" {...a11yProps(0)} />
//           <Tab label="UX" {...a11yProps(1)} />
//           <Tab label="Web Dev" {...a11yProps(2)} />
//         </Tabs>
      
//         <TabPanel value={value} index={0} className={classes.root2}>
//           <GridList cellHeight={280} cols={3} spacing={5} className={classes.gridList}>
//             {data.map((project) => (
//               <Project key={project.img} project={project}/>
//             ))}
//           </GridList>
//         </TabPanel>
//         <TabPanel value={value} index={1} className={classes.root2}>
//           <GridList cellHeight={280} cols={3} spacing={5} className={classes.gridList}>
//             {data.filter(project => project.type === 'UX').map((uxProject) => (
//               <Project key={uxProject.img} project={uxProject}/>
//             ))}
//           </GridList>
//         </TabPanel>
//         <TabPanel value={value} index={2} className={classes.root2}>
//           <GridList cellHeight={280} cols={3} spacing={5} className={classes.gridList}>
//             {data.filter(project => project.type === 'Web Development').map((devProject) => (
//               <Project key={devProject.img} project={devProject}/>
//             ))}
//           </GridList>
//         </TabPanel>
//       </div>
//     </div>
//   );
// };
