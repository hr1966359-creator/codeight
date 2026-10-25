function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}) {
  return (
    <div
      className={`section-heading ${align}`}
    >

      {eyebrow && (
        <div className="eyebrow">
          <span></span>
          {eyebrow}
        </div>
      )}

      <h2>
        {title}
      </h2>

      {description && (
        <p>
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionHeading;