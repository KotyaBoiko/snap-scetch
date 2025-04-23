import SimpleRadioInput from '@/components/ui/SimpleRadioInput/SimpleRadioInput'

const SelectTimeInterval = () => {
  return (
    <form className='flex gap-4'>
      <SimpleRadioInput text='30 seconds' name={'time'}/>
      <SimpleRadioInput text='60 seconds' name={'time'}/>
      <SimpleRadioInput text='2 minute' name={'time'}/>
      <SimpleRadioInput text='5 minute' name={'time'}/>
      <SimpleRadioInput text='10 minute' name={'time'}/>
    </form>
  )
}

export default SelectTimeInterval