#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
ptsr <- function(retina = TRUE, resize = TRUE,  width = NULL, height = NULL, elementId = NULL) {

  # forward options using x
  x = list(
    retina = retina,
    resize = resize
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'ptsr',
    x,
    width = width,
    height = height,
    package = 'ptsr',
    elementId = elementId
  )
}

#' Shiny bindings for ptsr
#'
#' Output and render functions for using ptsr within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a ptsr
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name ptsr-shiny
#'
#' @export
ptsrOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'ptsr', width, height, package = 'ptsr')
}

#' @rdname ptsr-shiny
#' @export
renderPtsr <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, ptsrOutput, env, quoted = TRUE)
}
