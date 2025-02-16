import { useEffect, useState } from "react";

function TypingTitle({ fullTitle, typingSpeed = 150, pauseDuration = 1000 }) {
  const [displayedTitle, setDisplayedTitle] = useState("Y");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let typingInterval;

    const type = () => {
      if (!isDeleting && index < fullTitle.length) {
        // Typing forward
        setDisplayedTitle(fullTitle.slice(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 1) {
        // Deleting backwards
        setDisplayedTitle(fullTitle.slice(0, index - 1));
        setIndex(index - 1);
      } else if (index === fullTitle.length) {
        // Pause at the end of typing before starting to delete
        clearInterval(typingInterval);
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (index === 1 && isDeleting) {
        // Restart typing after fully deleting
        setIsDeleting(false);
        setIndex(1);
      }
    };

    typingInterval = setInterval(type, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [fullTitle, typingSpeed, index, isDeleting, pauseDuration]);

  useEffect(() => {
    document.title = displayedTitle; // Set document title dynamically
  }, [displayedTitle]);
}

export default function TitleAnimation() {
  return (
    <div className="App">
      <TypingTitle
        fullTitle="Yousuf Uddin"
        typingSpeed={300}
        pauseDuration={600}
      />
    </div>
  );
}
