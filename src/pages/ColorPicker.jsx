import React from 'react'
import { Header } from '../components'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

const ColorPicker = () => {

  const change = (color)=>{
    document.getElementById('preview').style.backgroundColor = color.currentValue.hex
  }

  return (
    <div className='m-2 md:mt-10 mt-24 p-2 md:p-10 bg-white rounded-3xl' >
    <Header category={"ColorPicker"} title={"App"} />
      <div className='text-center' >
        <div id='preview' />
        <div className='flex justify-center items-center gap-20 flex-wrap' >
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4' >Inline Pallete</p>
            <ColorPickerComponent
            id='inline-pallete'
            mode='Palette'
            inline
            showButtons={false}
            change={change}
            modeSwitcher={false}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4' >Inline Picker</p>
            <ColorPickerComponent
            id='inline-pallete'
            mode='Picker'
            inline
            modeSwitcher={false}
            showButtons={false}
            change={change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
