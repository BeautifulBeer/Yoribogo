module.exports.function = function updateProcessShow (layoutType, processCommitState) {
  if(layoutType == '다음' || layoutType == '상세보기' ){
    processCommitState.currentStep = processCommitState.currentStep + 1;
    processCommitState.layoutType = "리스트원소";
  }else if(layoutType == '이전' ){
    processCommitState.currentStep = processCommitState.currentStep - 1;
    processCommitState.layoutType = "리스트원소";
  }
  return processCommitState;
}
