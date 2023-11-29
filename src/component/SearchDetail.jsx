import {useState, useEffect} from 'react';
import {Stack, Typography, Box}  from '@mui/material';
import {Videos } from './';
import {fetchFromAPI} from '../utilities/fetchFromAPI';
import {useParams} from 'react-router-dom';



const SearchDetail = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm } = useParams();

  useEffect (() => { 
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))

  }, [searchTerm]);


  return (
    <Box p={2} sx={{ overflow: 'auto', height:'90vh', flex: 2}}>
        <Typography variant ="h4" fontWeight='bold' mb={2} sx={{color: 'white'}} >
          Search Results for: 
          <span style={{color: '#f31503'}}> {searchTerm}
          </span> videos
        </Typography>
        <Videos videos= {videos} />
      </Box>
  )
}

export default SearchDetail