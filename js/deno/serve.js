import { serve } from 'https://deno.land/std@0.117.0/http/server.ts';

console.log('http://localhost:8000/');
serve(req => new Response('Hello World\n'), { addr: ':8000' });
