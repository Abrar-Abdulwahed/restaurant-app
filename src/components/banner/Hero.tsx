import React from 'react';
import { Container, Typography, Button, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundContainer = styled('div')({
    backgroundImage: `url('/assets/images/showcase.jpg')`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    height: 'calc(100vh - 86px)',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden'
});

const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#FEEBCB',
    padding: theme.spacing(4),
    maxWidth: '400px',

}));

const Hero = () => {
    return (
        <BackgroundContainer>
            <Container maxWidth="xl">
                <Card elevation={0} sx={{ width: 600, backgroundColor: "primary.dark", marginLeft: 'auto', position: 'relative', left: '1.5rem', padding: '20px' }} >
                    <CardContent>
                        <Typography variant="overline" display="block" sx={{ letterSpacing: '0.1em' }} gutterBottom>
                            New Arrival
                        </Typography>
                        <Typography fontSize={60} width={400} component="p" color="primary.main" gutterBottom sx={{
                            fontWeight: 'bold',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        }}>
                            Discover Our New Collection
                        </Typography>
                        <Typography color="tertiary.main">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </Typography>
                        <Button variant="contained" disableElevation color="primary" size="large" sx={{ borderRadius: 0, marginTop: '2rem', padding: '1rem 3rem' }}>
                            Buy Now
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        </BackgroundContainer>
    );
};

export default Hero;
