import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// button event to select photos
export function selectPhotos() {
  
  // create input element
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'image/*'
  input.multiple = true
  input.click()

  // listen for change event
  input.addEventListener('change', (event) => {
    const files = (event.target as HTMLInputElement).files
    console.log('Selected files:', files)
  })

}