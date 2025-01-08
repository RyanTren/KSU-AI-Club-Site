import Image from 'next/image'

interface LeaderProps {
  name: string;
  title: string;
  email: string;
  bio: string;
  imageUrl?: string;
  linkedinUrl?: string;
}

const LeaderCard = ({ name, title, email, bio, imageUrl, linkedinUrl }: LeaderProps) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
    <div className="w-48 h-48 relative mb-4">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      ) : (
        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-4xl text-gray-400">{name[0]}</span>
        </div>
      )}
    </div>
    <h3 className="text-2xl font-bold mb-2">{name}</h3>
    <h4 className="text-xl text-blue-600 mb-4">{title}</h4>
    <p className="text-gray-600 text-center mb-4">{bio}</p>
    <div className="flex space-x-4">
      <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
        {email}
      </a>
      {linkedinUrl && (
        <a 
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      )}
    </div>
  </div>
);

const leaders = [
  {
    name: "Branden Chen",
    title: "President",
    email: "bchen9@students.kennesaw.edu",
    bio: "Hi everyone. My name is Branden Chen, and currently I am a senior at KSU, pursuing a major in CS and a minor in Math. My hobbies include playing badminton, video games, and learning more about data science and ml. Currently, I am doing research involving pretraining medical segmentation models and multi-party encryption on activation functions such as ReLU. I hope to see everyone in our meetings!.",
    imageUrl: "/assets/president.jpg",
    linkedinUrl: "https://www.linkedin.com/in/branden-chen-/"
  },
  {
    name: "Charles Goode",
    title: "Vice President",
    email: "cgoode5@students.kennesaw.edu",
    bio: "Hi everyone, my name is Charles and I'm a second year mathematics major. I tutor math at KSU's SMART Center and conduct research in the machine learning field. I'm very interested in the application of machine learning in finance, and spend most of my freetime either learning, lifting weights, or cooking. I'm looking forward to seeing what we can accomplish this semester!",
    imageUrl: "/assets/vice-president.jpg",
    linkedinUrl: "https://www.linkedin.com/in/charles-goode3/"
  },
  {
    name: "Sanjay Ravikumar",
    title: "Treasurer",
    email: "sraviku1@students.kennesaw.edu",
    bio: "Hey Everyone! My name is Sanjay and I am a second year CS major! I am involved in AI/ML research specifically with adversarial attacks and defense mechanisms and also with image classification/detection. Outside of class I love editing in my free time, watching anime, and doom scrolling on TikTok. A fun fact about me is that I used to move states so much I had to continue studying 4th grade in 3 different schools! I'm so excited to be your treasurer for this semester!",
    imageUrl: "/assets/treasurer.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sanjaykravikumar/"
  },
  {
    name: "Ryan Howington",
    title: "Media Manager",
    email: "rhowing4@students.kennesaw.edu",
    bio: "Hello! I'm pursuing a Masters in Computer Science at KSU with an Artificial Intelligence concentration. I'm interested in all facets of AI, but am especially in intersection of AI and philosophy, cybersecurity, and social organization. I also enjoy playing video games, hiking, and powerlifting. I'm thrilled to be your media manager for this semester, and I can't wait to meet you!",
    imageUrl: "/assets/media-manager.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ryan-howington-29933364/"
  }
];

export default function About() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <section className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Leadership</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Meet the passionate individuals driving the AI Club forward.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader) => (
            <LeaderCard key={leader.email} {...leader} />
          ))}
        </div>
      </section>
    </main>
  );
}
