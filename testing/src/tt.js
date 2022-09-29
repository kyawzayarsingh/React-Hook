import React, { useEffect, useState } from 'react'

function TT() {
  const REGIONS = [
    { code: 'E', name: 'Ayeyarwady' },
    { code: 'B', name: 'Bago' },
    { code: 'C', name: 'Chin' },
    { code: 'K', name: 'Kachin' },
    { code: 'A', name: 'Kayah' },
    { code: 'I', name: 'Kayin' },
    { code: 'W', name: 'Magway' },
    { code: 'M', name: 'Mandalay' },
    { code: 'O', name: 'Mon' },
    { code: 'N', name: 'Naypyidaw' },
    { code: 'R', name: 'Rakhine' },
    { code: 'G', name: 'Sagaing' },
    { code: 'S', name: 'Shan' },
    { code: 'T', name: 'Tanintharyi' },
    { code: 'Y', name: 'Yangon' },
  ]
  const [townshipLists, setTownshipLists] = useState([])
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState([])
  const [filter, setFilter] = useState([])

  const response = {
    township_list: {
      A: ['LWA'],
      C: ['HAC'],
      W: ['MYW'],
      E: ['PNE'],
      G: ['MAG', 'SGG'],
      B: ['SUB', 'BOB', 'PYB', 'TOB'],
      M: ['CNM', 'CIM', 'MYM', 'ANM', 'PNM', 'AAM', 'PIM', 'MAM'],
      R: [],
      Y: [
        'BGY',
        'KTY',
        'SKY',
        'SRY',
        'TEY',
        'TAY',
        'DHY',
        'PEY',
        'AEY',
        'BNY',
        'YNY',
        'ENY',
        'DAY',
        'SGY',
        'KGY',
        'NNY',
        'MTY',
        'CUY',
        'KAY',
        'DNY',
        'LWY',
        'DLY',
        'DOY',
        'LAY',
        'HGY',
        'MEY',
        'HRY',
        'INY',
        'MOY',
        'PNY',
        'PGY',
        'NAY',
        'SOY',
        'SNY',
        'SAY',
        'TNY',
        'TIY',
        'KKY',
      ],
      I: ['HNI'],
      K: ['MAK'],
      T: ['DIT'],
      N: ['NWN', 'ZIN', 'PIN'],
      S: [],
    },
  }

  useEffect(() => {
    let loadDatas = []
    for (const [codeKey, value] of Object.entries(response.township_list)) {
      value.map((item, key) => {
        loadDatas.push({
          Code: codeKey,
          codeName: item,
        })
      })
    }
    setTownshipLists(loadDatas)
    setRegion(REGIONS)
  }, [])

  const handleChange = (code) => {
    var keyCode = townshipLists.filter((item) => {
      if (item.Code === code) {
        return item.codeName
      }
    })
    setFilter(keyCode)
  }

  const filteredData = filter.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toLowerCase().includes(search.toLowerCase()),
    )
  })

  console.log(filteredData)

  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />

      <select onChange={(e) => handleChange(e.target.value)}>
        <option value=""></option>
        {region.map((item) => (
          <option value={item.code}>{item.name}</option>
        ))}
      </select>

      {filteredData.map((item) => (
        <ul>
          <li>{item.codeName}</li>
        </ul>
      ))}
    </div>
  )
}

export default TT
