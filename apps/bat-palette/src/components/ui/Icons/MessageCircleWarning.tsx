type Props = React.SVGProps<SVGSVGElement>

export const MessageCircleWarning = ({ ...props }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}>
      {' '}
      <path d='M7.9 20A9 9 0 1 0 4 16.1L2 22Z' />
      <path d='M12 8v4' />
      <path d='M12 16h.01' />
    </svg>
  )
}
