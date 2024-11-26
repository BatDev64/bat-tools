import * as Tabs from '@radix-ui/react-tabs'
import styles from './Tabs.module.css'

interface Props<T> {
  children?: React.ReactNode
  items: T[]
  value: (item: T) => string
  keyValue: (item: T, i?: number) => string
  renderItem: (item: T, i?: number) => React.ReactNode
  asChild?: boolean
}
export const TabsList = <T,>({
  children,
  items,
  value,
  keyValue,
  renderItem,
  asChild
}: Props<T>) => {
  return (
    <Tabs.List className={styles.list}>
      {items.map((el, i) => (
        <Tabs.Trigger
          asChild={asChild}
          className={`button-base ${styles.trigger}`}
          value={value(el)}
          key={keyValue(el, i)}>
          {renderItem(el, i)}
        </Tabs.Trigger>
      ))}
      {children}
    </Tabs.List>
  )
}
