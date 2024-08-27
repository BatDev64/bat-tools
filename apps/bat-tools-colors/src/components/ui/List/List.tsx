interface ListProps<T> extends React.HTMLAttributes<HTMLUListElement> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  keyItem: (item: T) => string
  className?: string
}

export const List = <T extends object>({
  items,
  keyItem,
  renderItem,
  className,
  ...rest
}: ListProps<T>) => {
  return (
    <ul
      className={className}
      {...rest}>
      {items.map((item) => {
        return <li key={keyItem(item)}>{renderItem(item)}</li>
      })}
    </ul>
  )
}
