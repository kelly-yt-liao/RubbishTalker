
function itemSelector(list) {
  const idx = Math.floor(Math.random() * list.length)
  return list[idx]
}

function generateMessage(options) {

  let resultMessage = ''

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  if (options.option === 'engineer') {
    resultMessage += '身為一個工程師, ' + itemSelector(task.engineer) + ', '
  } else if (options.option === 'designer') {
    resultMessage += '身為一個設計師, ' + itemSelector(task.designer) + ', '
  } else {
    resultMessage += '身為一個創業家, ' + itemSelector(task.entrepreneur) + ', '
  }
  resultMessage += itemSelector(phrase) + '吧~!'

  return resultMessage
}

module.exports = generateMessage
