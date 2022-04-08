import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';



const Work = () => {
    return (
        <>

            <Container>
                <hr className="style-seven" />


                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} lg={4}>
                        <Card sx={{
                            maxWidth: "100%",
                            borderRadius: 0,

                        }}>

                            <CardMedia
                                component="img"
                                height="350"
                                image="https://images.unsplash.com/photo-1557130641-1b14718f096a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
                                alt="male tattoo model"
                            />

                        </Card>

                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Card sx={{
                            maxWidth: "100%",
                            borderRadius: 0,
                        }}>

                            <CardMedia
                                component="img"
                                height="350"
                                image="https://images.unsplash.com/photo-1614258672366-17f79f814b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                alt="girl tattoo model"
                            />

                        </Card>

                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Card sx={{
                            maxWidth: "100%",
                            borderRadius: 0,
                        }}>

                            <CardMedia
                                component="img"
                                height="350"
                                image="https://images.unsplash.com/flagged/photo-1575495407752-bfb6fb0518bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                alt="green iguana"
                            />

                        </Card>

                    </Grid>

                </Grid>
                <hr style={{ marginTop: "30px" }} className="style-seven" />
            </Container>

        </>
    )
}

export default Work