import * as React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import {Link} from 'react-router-dom';
import imgKUS from '../statics/images/homepage_kus.jpg'
import {GoogleMapWidget} from './GoogleMapWidget'

function PhotoItem(props : any){
    return(
        <Box sx={{maxWidth: "25%", backgroundColor: "white", padding: '10px', borderRadius: '10%'}}>
            <CardMedia
                component="img"
                alt="green iguana"
                image={props.items.photo}
                sx={ {borderRadius: '10%', borderBottomLeftRadius: '0%', borderBottomRightRadius: '0%'}}
            />
            <CardContent sx={{}} >
            <Link to={props.items.name} >
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
            name: "KUS　ウシ",
            desc: `台南出身の男です～興味があることは言語、使える言語は四つ：「台湾語、台湾華語、英語、日本語」（でも日本語すごく下手）`
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
            <Typography
                variant="h3"
                align="center"
                sx={{
                    margin: '2% 5%',
                    backgroundColor: 'white',
                    borderRadius: '10px'
                }}
            >
                成員 Members
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '2% 5%'}} >
                {showProfiles}      
            </Box>
            <Box sx={{
                    backgroundColor: "white",
                    padding: '10px',
                    borderRadius: '2%',
                    margin: '2% 5%',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    height: '30vh',
                    width: '60vw',
                }}>
                <Box sx={{gridRow: '1', gridColumn: 'span 2', }}>
                   <Typography align='center' variant='h4'>Where Are We?</Typography> 
                </Box>     
                <Box sx={{gridRow: 'span 5', gridColumn: 'span 1', marginRight: '5px'}}>
                    <GoogleMapWidget />
                </Box>
                <Box sx={{gridRow: 'span 5', gridColumn: 'span 1', marginLeft: '5px'}}>
                    <Typography>
                        Introduction of our school
                        学校の紹介
                    </Typography>
                    <Typography>
                        We are from National Formosa University, 
                        all majored in Computer Science and Information Engineering.
                        僕たちは国立虎尾科技大学からで、情報工学に専攻している卒業生です。
                        このウェブサイトは僕たちの練習用サイトプロジェクト
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}

export default HomepageBody;