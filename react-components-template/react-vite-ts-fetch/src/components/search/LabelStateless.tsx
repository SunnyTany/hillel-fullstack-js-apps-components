const LabelStateless = ({textLabel: string}): JSX.Element => {
  return (
    <label className="search__label-input">
      {textLabel}
    </label>
  )
}

export default LabelStateless;