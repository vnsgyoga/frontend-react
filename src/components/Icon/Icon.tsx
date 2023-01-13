import classNames from "classnames"
import React, { SVGProps } from "react"

import { ReactComponent as ArrowUpRight } from "../../assets/images/icons/arrow-up-right.svg"
import { ReactComponent as ThreeDots } from "../../assets/images/icons/3-dots-horizontal.svg"
import { ReactComponent as CBLogo } from "../../assets/images/cb-logo.svg"

const ICON_NAME_COMPONENT_MAP = {
  "arrow-up-right": ArrowUpRight,
  "three-dots": ThreeDots,
  "cb-logo": CBLogo,
}

export type IconName = keyof typeof ICON_NAME_COMPONENT_MAP

type Props = SVGProps<SVGSVGElement> & {
  name: IconName
  size?: number
  className?: string
  clickable?: boolean
  currentColor?: boolean
}

const Icon = ({
  name,
  size = 30,
  className = "",
  clickable,
  currentColor = false,
  ...restProps
}: Props) => {
  if (ICON_NAME_COMPONENT_MAP[name]) {
    const IconComponent = ICON_NAME_COMPONENT_MAP[name]

    return (
      <IconComponent
        className={classNames(
          "cb-icon",
          { "cb-icon--clickable": clickable, "fill-current": currentColor },
          className
        )}
        width={size}
        height={size}
        {...restProps}
      />
    )
  }

  return null
}

export default Icon
