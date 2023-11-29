import {Link } from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import {demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle } from '../utilities/constant'


const VideoCard = ({video: {id: {videoId}, snippet} }) => {
   
  return (
    <Card sx={{ width: {xs: '288px',  sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 2, margin:'auto' }}>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt ={snippet?.title} sx={{ width: { xs: '288px', sm: '358px'}, objectFit: 'cover', height: 180}} />
    </Link>
    <CardContent sx={{backgroundColor: '#1e1e1e', height: '40px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight='bold' color='#fff' sx={{ fontSize: '11px', marginBottom: '2px' }}>
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
        </Link>
        <Link to={snippet ?. channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray" sx={{ fontSize: '11px', display: 'flex', alignItems: 'center'  }}>
                {snippet?. channelTitle  || demoChannelTitle }
                <CheckCircle sx={{ fontSize: '14px', color:'gray', ml: '10px'}} />
            </Typography>
        </Link>
    </CardContent>
    </Card>

    
  )
}

export default VideoCard