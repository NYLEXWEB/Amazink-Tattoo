import React from "react";

export default function Artists() {
  const artists = [
    {
      name: "Mara Solis",
      style: "Fine Line / Blackwork",
      bio: "13 years refining the tension between delicacy and permanence. Known for her botanical linework and invisible healing technique.",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    },
    {
      name: "Kenji Muro",
      style: "Japanese / Neo-Traditional",
      bio: "Trained in Osaka, now based in LA. His tebori technique produces depth and saturation that machines simply cannot replicate.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    },
    {
      name: "Zoe Harrington",
      style: "Geometric / Sacred Geometry",
      bio: "A former architect who found her true medium in skin. Every pattern is mathematically precise, every curve intentional.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    },
  ];

  return (
    <section className="artists" id="artists">
      <div className="artists-header fade-up">
        <p className="about-tag">The Team</p>
        <div className="divider"></div>
        <h2 className="section-title">Meet the <em>Artists</em></h2>
      </div>
      <div className="artists-grid">
        {artists.map((artist, idx) => (
          <div key={idx} className="artist-card">
            <img src={artist.image} alt={`Artist ${artist.name}`} />
            <div className="artist-overlay">
              <p className="artist-style">{artist.style}</p>
              <h3 className="artist-name">{artist.name}</h3>
              <p className="artist-bio">{artist.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
