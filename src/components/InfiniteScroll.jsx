const InfinitScroll = ({ children, speed = 50, direction = "left" }) => {
  return (
    <div className="InfinitScroll-container">
      <div
        className="marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default InfinitScroll
