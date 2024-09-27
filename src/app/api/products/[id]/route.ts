import axios from 'axios';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/products/${params.id}`);

        return new Response(JSON.stringify(response.data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching products:', error);

        return new Response(JSON.stringify({ message: 'Failed to fetch products' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
