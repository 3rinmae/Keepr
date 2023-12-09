


namespace Keepr.Services;

public class KeepsService
{
  private readonly KeepsRepository _repository;

  public KeepsService(KeepsRepository repository)
  {
    _repository = repository;
  }

  internal Keep CreateKeep(Keep keepData)
  {
    Keep keep = _repository.CreateKeep(keepData);
    return keep;
  }

  internal string DestroyKeep(int keepId, string userId)
  {
    Keep keep = GetKeepById(keepId, userId);
    if (keep.CreatorId != userId)
    {
      throw new Exception("This is not your Keep to delete");
    }
    _repository.DestroyKeep(keepId);
    return $"{keep.Name} has been deleted!";
  }

  internal Keep GetKeepById(int keepId, string userId)
  {
    Keep keep = _repository.GetKeepById(keepId);
    if (keep == null)
    {
      throw new Exception($"Invalid Id: {keepId}");
    }
    return keep;
  }

  internal Keep GetKeepByIdAndIncrementVisits(int keepId, string userId)
  {
    Keep keep = GetKeepById(keepId, userId);
    keep.Views++;
    _repository.UpdateKeep(keep);
    return keep;
  }

  internal List<Keep> GetKeeps(string userId)
  {
    List<Keep> keeps = _repository.GetKeeps();
    return keeps;
  }

  internal List<VaultVaultKeep> GetKeepsInVault(int vaultId, string userId)
  {
    List<VaultVaultKeep> vaultVaultKeeps = _repository.GetKeepsInVault(vaultId, userId);
    if (vaultVaultKeeps.Count <= 0)
    {
      throw new Exception($"Invalid Id: {vaultId}");
    }
    return vaultVaultKeeps;
  }

  internal Keep UpdateKeep(int keepId, string userId, Keep keepData)
  {
    Keep keepToUpdate = GetKeepById(keepId, userId);
    if (keepToUpdate.CreatorId != userId)
    {
      throw new Exception("This is not your Keep to update");
    }

    keepToUpdate.Name = keepData.Name ?? keepToUpdate.Name;
    keepToUpdate.Description = keepData.Description ?? keepToUpdate.Description;
    keepToUpdate.Img = keepData.Img ?? keepToUpdate.Img;

    Keep keep = _repository.UpdateKeep(keepToUpdate);
    return keep;

  }
}