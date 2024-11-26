const SquareIcon = ({
  fill = '#F8F7FD',
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...props}>
    <rect
      x='0.5'
      y='0.5'
      width='33'
      height='33'
      rx='1.5'
      fill={fill}
    />
  </svg>
)

export default SquareIcon
