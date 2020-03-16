using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebSite.ViewModel;

namespace WebSite.ModelBinder
{
	public class ConsultaPlasticosModelBinder : DefaultModelBinder
	{
		public override object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
		{

			var retorno = base.BindModel(controllerContext, bindingContext);
			if (bindingContext.ModelType == typeof(ConsultaPlasticosViewModel))
				return (ConsultaPlasticosViewModel)retorno;

			return retorno;
		}
	}
}