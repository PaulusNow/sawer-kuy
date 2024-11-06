// pages/index.js (page.js)

import Link from 'next/link';

export default function Home() {
  return (
    <div className="container text-center">
      <h1 className="mt-5">Selamat Datang di Sawerkuy</h1>
      <p>Pilih tampilan untuk masuk sebagai Penerima atau Pengirim</p>

      <div className="d-flex justify-content-center mt-4">
        <Link href="/client1">
          <button className="btn btn-primary mx-2">Masuk sebagai Penerima</button>
        </Link>
        <Link href="/client2">
          <button className="btn btn-secondary mx-2">Masuk sebagai Pengirim</button>
        </Link>
      </div>
    </div>
  );
}
