const ScrollToTop = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="scroll-to-top"
      onClick={handleScrollUp}
      aria-label="Înapoi sus"
      title="Înapoi sus"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
