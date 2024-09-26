"use client";
import { PopularPage } from '@/utils/types';
import { Box, Typography, Button, List, ListItem } from '@mui/material';
import Link from 'next/link';

export async function getStaticProps() {
    const popularPages: PopularPage[] = [
        { id: 1, title: 'الصفحة الرئيسية', url: '/' },
        { id: 2, title: 'المنتجات', url: '/product' },
        { id: 3, title: 'الأسعار', url: '/pricing' },
    ];

    return {
        props: {
            popularPages,
        },
    };
}

export default function Custom404({ popularPages }: { popularPages: PopularPage[] }) {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                bgcolor: '#f5f5f5',
                p: 3,
            }}
        >
            <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: '#333' }}>
                404
            </Typography>
            <Typography variant="h5" sx={{ mb: 2, color: '#666' }}>
                عذرًا! الصفحة التي تبحث عنها غير موجودة.
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
                ربما ترغب في زيارة الصفحات الشائعة التالية:
            </Typography>

            <List>
                {popularPages?.map((page) => (
                    <ListItem key={page.id}>
                        <Link href={page.url} passHref>
                            <Button variant="outlined" sx={{ textTransform: 'none' }}>
                                {page.title}
                            </Button>
                        </Link>
                    </ListItem>
                ))}
            </List>

            <Link href="/" passHref>
                <Button variant="contained" color="primary" sx={{ mt: 4, padding: '10px 20px', textTransform: 'none' }}>
                    العودة إلى الصفحة الرئيسية
                </Button>
            </Link>
        </Box>
    );
}
