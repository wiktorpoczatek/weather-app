function PreviewFrame({ title = 'weather.app', url = 'localhost:5173', children }) {
  return (
    <div className="preview-frame">
      <div className="preview-titlebar">
        <span className="preview-dot r" aria-hidden="true" />
        <span className="preview-dot y" aria-hidden="true" />
        <span className="preview-dot g" aria-hidden="true" />
        <span className="preview-title">{title}</span>
        <span className="preview-url">{url}</span>
      </div>
      <div className="preview-body">{children}</div>
    </div>
  )
}

export default PreviewFrame
