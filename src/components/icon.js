export function Icon({ src, style, alt, ...props }) {
	return <img style={{ width: 16, height: 16, ...(style || {}) }} alt={alt} src={src} {...props} />;
}
