import * as React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import {Link} from 'react-router-dom';
import imgKUS from '../statics/images/homepage_kus.jpg'

function PhotoItem(props : any){
    return(
        <Box sx={{maxWidth: "25%"}}>
            <CardMedia
                component="img"
                alt="green iguana"
                image={props.items.photo}
                sx={ {borderRadius: '30%'}}
            />
            <CardContent>
            <Link to={props.items.name}>
            <Typography gutterBottom variant="h5" component="div" align="center">
                {props.items.name}
            </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary">
                {props.items.desc}
            </Typography>
            </CardContent>
        </Box>
    )
}

function Item(props : any){

}

function HomepageBody(props : any){
    const profileList : any = [
        {
            photo: imgKUS,
            name: "Khu",
            desc: "Shut the fuck up."
        },
        {
            photo: imgKUS,
            name: "Roy",
            desc: "toehdanohti"
        },
        {
            photo: imgKUS,
            name: "Denny",
            desc: "toehdanohti"
        },
    ];
    const showProfiles = profileList.map((profile : any) =>
        <PhotoItem items={profile}></PhotoItem>
    );
    return(
        <div>
            <h1>成員 Members</h1>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '2%'}} >
                {showProfiles}      
            </Box>
        </div>
    );
}

export default HomepageBody;