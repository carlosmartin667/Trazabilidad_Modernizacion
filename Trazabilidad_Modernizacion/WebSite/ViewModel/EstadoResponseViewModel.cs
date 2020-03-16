using System;

namespace WebSite.ViewModel
{
	public class EstadoResponseViewModel
	{
		public EstadoResponseViewModel()

		{
			this.Status = true;
		}
		public EstadoResponseViewModel(string error)
		{
			Error = error;
		}

		public EstadoResponseViewModel(string error, string errorDetalle)
		{
			Error = error;
			ErrorDetalle = errorDetalle;
			this.Status = false;
		}

		public bool Status
		{
			get;

			set;
		}

		public String Error { get; set; }

		public String ErrorDetalle { get; set; }

		public void SetError(String error)
		{
			Error = error;
		}
	}
}